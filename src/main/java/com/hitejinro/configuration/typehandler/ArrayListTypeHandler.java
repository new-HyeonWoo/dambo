package com.hitejinro.configuration.typehandler;

import org.apache.ibatis.type.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;

@Alias("textArray")
@MappedJdbcTypes(JdbcType.OTHER)
@MappedTypes(ArrayList.class)
public class ArrayListTypeHandler extends BaseTypeHandler<ArrayList<String>>
{
    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, ArrayList<String> parameter, JdbcType jdbcType) throws SQLException {
        Connection c = ps.getConnection();
        Array inArray = c.createArrayOf("text", parameter.toArray());
        ps.setArray(i, inArray);
    }

    @Override
    public ArrayList<String> getNullableResult(ResultSet rs, String columnName) throws SQLException {
        Array outputArray = rs.getArray(columnName);
        if(outputArray == null) {
            return new ArrayList<>();
        }
        return new ArrayList<>(Arrays.asList((String[]) outputArray.getArray()));
    }

    @Override
    public ArrayList<String> getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        Array outputArray = rs.getArray(columnIndex);
        if(outputArray == null) {
            return new ArrayList<>();
        }
        return new ArrayList<>(Arrays.asList((String[]) outputArray.getArray()));
    }

    @Override
    public ArrayList<String> getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        Array outputArray = cs.getArray(columnIndex);
        if(outputArray == null) {
            return new ArrayList<>();
        }
        return new ArrayList<>(Arrays.asList((String[]) outputArray.getArray()));
    }
}
