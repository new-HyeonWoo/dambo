package com.hitejinro.configuration;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@RequiredArgsConstructor
public class SecurityConfiguration {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(
                authorize ->
                        authorize
                                .antMatchers("/**").permitAll()
                                .mvcMatchers("/**").permitAll()
                                .anyRequest().permitAll())
                .headers().frameOptions().deny().disable()
                .headers().frameOptions().sameOrigin().disable()
                .csrf().disable()
                .cors().disable()
                .formLogin().disable()
                .httpBasic().disable();
        return http.build();
    }
}
