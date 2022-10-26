package com.hitejinro.service.popup;

import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.common.enums.ErrorMessageType;
import com.hitejinro.common.exception.HiteJinroException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class Es01PopupServiceFactory {
	private final List<Es01PopupService> services;

	public Es01PopupService getService(final CollateralType type) {
		return services.stream()
				.filter(popupService -> popupService.type() == type)
				.findFirst()
				.orElseThrow(() -> new HiteJinroException(ErrorMessageType.INTERNAL_SERVER_ERROR));
	}
}
