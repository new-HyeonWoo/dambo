package com.hitejinro.old.common.model;

import java.util.List;

/**
 * The type Promotion Data table vo.
 */
public class DataTableVO {

    /**
     * 요청 순서
     */
    private int draw = 1;

    /**
     * 레코드 수
     */
    private int recordsTotal;

    /**
     * 레코드 필터 수
     */
    private int recordsFiltered;
    
    /**
     * 엘로코아 파라메터
     */
    private String eloquaParam;

    /**
     * 데이터
     */
    private List<?> data;

    /**
     * Gets draw.
     *
     * @return the draw
     */
    public int getDraw() {
        return draw;
    }

    /**
     * Sets draw.
     *
     * @param draw the draw
     */
    public void setDraw(int draw) {
        this.draw = draw;
    }

    /**
     * Gets records total.
     *
     * @return the records total
     */
    public int getRecordsTotal() {
        return recordsTotal;
    }

    /**
     * Sets records total.
     *
     * @param recordsTotal the records total
     */
    public void setRecordsTotal(int recordsTotal) {
        this.recordsTotal = recordsTotal;
    }

    /**
     * Gets records filtered.
     *
     * @return the records filtered
     */
    public int getRecordsFiltered() {
        return recordsFiltered;
    }

    /**
     * Sets records filtered.
     *
     * @param recordsFiltered the records filtered
     */
    public void setRecordsFiltered(int recordsFiltered) {
        this.recordsFiltered = recordsFiltered;
    }

    /**
     * Gets data.
     *
     * @return the data
     */
    public List<?> getData() {
        return data;
    }

    /**
     * Sets data.
     *
     * @param data the data
     */
    public void setData(List<?> data) {
        this.data = data;
    }

    public String getEloquaParam() {
        return eloquaParam;
    }

    public void setEloquaParam(String eloquaParam) {
        this.eloquaParam = eloquaParam;
    }
    
    
}
