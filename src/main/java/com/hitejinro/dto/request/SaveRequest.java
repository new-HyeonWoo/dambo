package com.hitejinro.dto.request;

import lombok.*;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class SaveRequest {

    private HashMap<String, Object> params;

    public List<HashMap<String, Object>> getListMap() {
        List<HashMap<String, Object>> list = new ArrayList<>();
        for (int i = 0; i<Integer.parseInt(StringUtils.defaultString(this.params.get("저장_RowCount").toString(), "0")); i++) {
            HashMap<String, Object> map = new HashMap<>();
            for(Map.Entry<String, Object> entry : this.params.entrySet()) {
                String strKey = entry.getKey();
                Object value = this.params.get(strKey);

                if (value instanceof List) {
                    List<Object> values = (List<Object>) this.params.get(strKey);
                    value =  values.get(i);
                }

                map.put(strKey, value);
            }
            list.add(map);
        }
        return list;
    }

    public String getYyyy() {
        return StringUtils.defaultString(this.params.get("년도").toString(), "");
    }

    public String getSeq() {
        return StringUtils.defaultString(this.params.get("감정순번").toString(), "");
    }

}
