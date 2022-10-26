package com.hitejinro.configuration.properties;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("external.eap")
@Getter
@Setter
public class EapProperty {
    private String url;
}