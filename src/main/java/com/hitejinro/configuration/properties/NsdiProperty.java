package com.hitejinro.configuration.properties;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("external.nsdi")
@Getter
@Setter
public class NsdiProperty {
    private String url;
    private String accessKey;
}