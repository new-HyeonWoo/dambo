package com.hitejinro.common.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class PageResultWrapper<T> {
    /** 목록 갯수 */
    private final Integer total;
    /** 목록 */
    private final List<T> list;

    private PageResultWrapper(final Integer total, final List<T> list) {
        this.total = Objects.isNull(total) ? 0 : total;
        this.list = new ArrayList<>(list);
    }

    public static <T> PageResultWrapper<T> of(final Integer count, final List<T> list) {
        return new PageResultWrapper(count, list);
    }

    public Integer getTotal() {
        return total;
    }

    public List<T> getList() {
        return list;
    }
}
