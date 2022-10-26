package com.hitejinro.configuration.advice;

import com.hitejinro.common.enums.ErrorMessageType;
import com.hitejinro.common.exception.HiteJinroException;
import com.hitejinro.common.http.ErrorResponse;
import io.sentry.Sentry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.dao.ConcurrencyFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Arrays;
import java.util.Optional;

@RestControllerAdvice
@Slf4j
public class RestExceptionAdvice {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> globalException(Exception ex) {
        ex.printStackTrace();
        captureException(ex);
        return makeResponseEntity(Optional.ofNullable(AnnotationUtils.findAnnotation(ex.getClass(), ResponseStatus.class))
                .map(ResponseStatus::value)
                .orElse(HttpStatus.INTERNAL_SERVER_ERROR));
    }

    @ExceptionHandler(ConcurrencyFailureException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<ErrorResponse> conflictException(Exception e) {
        captureException(e);
        return makeResponseEntity(HttpStatus.CONFLICT);
    }

    @ExceptionHandler(HiteJinroException.class)
    public ResponseEntity<ErrorResponse> customAssertException(HiteJinroException e) {
        captureException(e);
        HttpStatus httpStatus = Arrays.stream(HttpStatus.values())
                .filter(status -> status.value() == e.getErrorMessageType().getStatus())
                .findFirst()
                .orElse(HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(new ErrorResponse(e.getMessage()), httpStatus);
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public ResponseEntity<ErrorResponse> methodNotAllowedException(HttpRequestMethodNotSupportedException e) {
        captureException(e);
        return makeResponseEntity(HttpStatus.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler({HttpMessageNotReadableException.class})
    public ResponseEntity<ErrorResponse> httpMessageNotReadableException( HttpMessageNotReadableException e) {
        captureException(e);
        return makeResponseEntity(HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler({BindException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ErrorResponse> methodArgumentNotValidException( BindException e) {
        captureException(e);
        return new ResponseEntity<>(new ErrorResponse(getExceptionMessage(e)), HttpStatus.BAD_REQUEST);
    }
    private String getExceptionMessage(BindException ex) {
        return ex.getBindingResult().getAllErrors().get(0).getDefaultMessage();
    }

    private ResponseEntity<ErrorResponse> makeResponseEntity(HttpStatus status) {
        return new ResponseEntity<>(new ErrorResponse(ErrorMessageType.valueOf(status.value())), status);
    }

    private void captureException(Exception ex) {
        Sentry.captureException(ex);
    }
}
