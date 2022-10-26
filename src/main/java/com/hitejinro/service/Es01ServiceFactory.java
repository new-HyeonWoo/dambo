package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.common.enums.ErrorMessageType;
import com.hitejinro.common.exception.HiteJinroException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class Es01ServiceFactory {
	private final List<Es01Service> services;

	public Es01Service getService(CollateralKindType type) {
		return services.stream()
				.filter(es01Service -> es01Service.type() == type)
				.findFirst()
				.orElseThrow(() -> new HiteJinroException(ErrorMessageType.INTERNAL_SERVER_ERROR));
	}
}
