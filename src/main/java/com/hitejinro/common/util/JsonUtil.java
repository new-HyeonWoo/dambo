package com.hitejinro.common.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import java.util.Objects;

public final class JsonUtil {
    private JsonUtil() {}

    private static final ObjectMapper objectMapper = newDefaultMapper();

    private static ObjectMapper newDefaultMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        mapper.registerModule(new JavaTimeModule());

        return mapper;
    }

    public static String prettyPrint(Object value) {
        try {
            return objectMapper.writeValueAsString(value);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    public static <A> String toJson(final A data) {
        if(data == null) return null;

        try {
            return objectMapper.valueToTree(data).toString();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static  <A> A fromJson(String json, Class<A> clazz) {
        if(json == null) return null;

        try {
            return objectMapper.treeToValue(objectMapper.readTree(json), clazz);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static  <A> A fromJson(String json, JavaType javaType) {
        if(json == null) return null;

        try {
            return objectMapper.readValue(json, javaType);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static String asText(JsonNode json, String key) {
        if (Objects.isNull(json) || !json.hasNonNull(key)) {
            return null;
        }
        return json.get(key).asText();
    }
}
