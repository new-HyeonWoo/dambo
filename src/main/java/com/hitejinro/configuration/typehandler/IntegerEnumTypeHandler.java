package com.hitejinro.configuration.typehandler;

import com.hitejinro.common.enums.common.IntegerEnumType;
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;
import org.apache.ibatis.type.MappedTypes;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;

@MappedJdbcTypes(JdbcType.OTHER)
@MappedTypes(IntegerEnumType.class)
public class IntegerEnumTypeHandler<E extends Enum<E>> extends BaseTypeHandler<IntegerEnumType> {
    private Class<E> type;

    public IntegerEnumTypeHandler(Class<E> type) {
        this.type = type;
    }

    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, IntegerEnumType parameter, JdbcType jdbcType) throws SQLException {
        ps.setInt(i, parameter.getType());
    }

    @Override
    public IntegerEnumType getNullableResult(ResultSet rs, String columnName) throws SQLException {
        return getType(rs.getInt(columnName));
    }

    @Override
    public IntegerEnumType getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        return getType(rs.getInt(columnIndex));
    }

    @Override
    public IntegerEnumType getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        return getType(cs.getInt(columnIndex));
    }

    private IntegerEnumType getType(int code) {
        IntegerEnumType[] enumConstants = (IntegerEnumType[]) type.getEnumConstants();

        return Arrays.stream(enumConstants)
                .filter(item -> item.getType() == code)
                .findFirst()
                .orElse(null);
    }
}