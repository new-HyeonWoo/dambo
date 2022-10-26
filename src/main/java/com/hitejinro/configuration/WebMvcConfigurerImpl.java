package com.hitejinro.configuration;

import com.hitejinro.old.menu.service.MenuService;
import com.hitejinro.old.menu.web.MenuController;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebMvcConfigurerImpl implements WebMvcConfigurer {
    private final MenuService menuService;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                .allowedHeaders("*")
                .allowedMethods("*")
                .allowCredentials(true);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new MenuController(menuService))
                .addPathPatterns(
                        "/es00/*.do",
                        "/es01/*.do",
                        "/es02/*.do",
                        "/es03/*.do"
                        );
    }
}