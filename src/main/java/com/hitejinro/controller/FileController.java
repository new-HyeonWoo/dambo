package com.hitejinro.controller;

import com.hitejinro.common.enums.ErrorMessageType;
import com.hitejinro.common.exception.HiteJinroException;
import com.hitejinro.common.http.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.boot.autoconfigure.web.servlet.MultipartProperties;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Objects;
import java.util.stream.Stream;

/**
 * 파일업로드 컨트롤러
 */
@RequestMapping("/ezgen/files")
@RestController
@RequiredArgsConstructor
public class FileController {
	private final MultipartProperties properties;

	@PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResultResponse<Void> upload(@RequestParam("kindCode") String kindCode,
									   @RequestParam("filepond") MultipartFile file) throws IOException {
		if(!file.isEmpty()) {
			Path dirPath = Paths.get(StringUtils.join(properties.getLocation(), File.separator, kindCode, File.separator));
			try (Stream<Path> pathStream =  Files.list(dirPath)) {
				if (pathStream.anyMatch(
						item -> item.getFileName().toString().equals(file.getOriginalFilename()))) {
					throw new HiteJinroException("같은 파일명이 이미 존재합니다.", ErrorMessageType.FILE_UPLOAD_EXISTS);
				}

				file.transferTo(Paths.get(StringUtils.join(properties.getLocation(), File.separator, kindCode, File.separator, file.getOriginalFilename())));
			}
		}

		return ResultResponse.ok();
	}

	@GetMapping(value = "/download", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	public ResponseEntity<byte[]> download(@RequestParam("kindCode") String kindCode,
										   @RequestParam("FileName") String name) throws IOException {
		Path dirPath = Paths.get(StringUtils.join(properties.getLocation(), File.separator, kindCode, File.separator));
		try (Stream<Path> pathStream =  Files.list(dirPath)){
			Path path = pathStream.filter(item -> item.getFileName().toString().equals(name))
					.findFirst()
					.orElseThrow(() -> new HiteJinroException("파일을 찾을 수 없습니다.", ErrorMessageType.FILE_UPLOAD_NOTFOUND));

			return ResponseEntity.ok()
					.contentType(MediaType.APPLICATION_OCTET_STREAM)
					.header(HttpHeaders.CONTENT_DISPOSITION, StringUtils.join("attachment; filename=\"", URLEncoder.encode(name, "UTF-8")))
					.header(HttpHeaders.TRANSFER_ENCODING, "binary")
					.body(Files.readAllBytes(path));
		}
	}
}

@RequestMapping("/view/files")
@Controller
class FileViewController {
	@RequestMapping(value = "/upload")
	public String upload(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("kindCode", params.get("kindCode"));

		return "common/file_upload";
	}
}
