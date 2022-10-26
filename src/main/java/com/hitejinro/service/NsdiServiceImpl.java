package com.hitejinro.service;

import com.hitejinro.configuration.component.NsdiComponent;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@RequiredArgsConstructor
@Service
public class NsdiServiceImpl implements NsdiService {
    private final NsdiComponent nsdiComponent;


    public HashMap findQuery(HashMap<String, String> params, String name) {
        switch (name) {
            case "표준지공시지가_WFS_조회":
                return nsdiComponent.getReferLandPriceWFS(params);
            case "표준지공시지가속성조회":
                return nsdiComponent.getReferLandPriceAttr(params);
            case "토지이용계획속성조회":
                return nsdiComponent.getLandUseAttr(params);
            case "용도별건물속성조회":
                return nsdiComponent.getBuildingUse(params);
            case "공동주택가격속성조회":
                return nsdiComponent.getApartHousingPriceAttr(params);
            case "건축물연령속성조회":
                return nsdiComponent.getBuildingAge(params);
            case "개별공시지가속성조회":
                return nsdiComponent.getIndvdLandPriceAttr(params);
            case "건축물대장_기본개요_조회":
                return nsdiComponent.getBrBasisOulnInfo(params);
            case "건축물대장_총괄표제부_조회":
                return nsdiComponent.getBrRecapTitleInfo(params);
            case "건축물대장_표제부_조회":
                return nsdiComponent.getBrTitleInfo(params);
            case "건축물대장_층별개요_조회":
                return nsdiComponent.getBrFlrOulnInfo(params);
            case "건축물대장_부속지번_조회":
                return nsdiComponent.getBrAtchJibunInfo(params);
            case "건축물대장_전유공용면적_조회":
                return nsdiComponent.getBrExposPubuseAreaInfo(params);
            case "건축물대장_오수정화시설_조회":
                return nsdiComponent.getBrWclfInfo(params);
            case "건축물대장_주택가격_조회":
                return nsdiComponent.getBrHsprcInfo(params);
            case "건축물대장_전유부_조회":
                return nsdiComponent.getBrExposInfo(params);
            case "건축물대장_지역지구구역_조회":
                return nsdiComponent.getBrJijiguInfo(params);
            default:
                throw new IllegalArgumentException(String.format("존재하지 않은 타입입니다. (%s)", name));
        }
    }
}
