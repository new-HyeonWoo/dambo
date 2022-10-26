## 담보감정시스템

## Dependency
### Spring Boot Starter
Web, Aop, Mybatis
### Object Mapper
Mybatis
### JDBC
Oracle
### ETC
Lombok

## xUnit
* Junit5 (필요에 따라 빈티지버전 사용)
* RestDoc 적극활용

## Layer Architecture
* Presentation Layer
* Service Layer (+ Business)
* Persistence Layer

## Package Structure (계층형)
(참고: [패키지 구조 가이드](https://cheese10yun.github.io/spring-guide-directory/))
```html
└── src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── hitejinro
    │   │               ├── DemoApplication.java
    │   │               ├── config
    │   │               ├── controller
    │   │               ├── dao
    │   │               ├── domain
    │   │               ├── exception
    │   │               └── service
    │   ├── webapp
    │   │     └── WEB-INF
    │   │            └── jsp
    │   └── resources
    │       └── application.properties
```

## 버전 체크사항
* Mybatis 3.5.7 ([Mybatis Release Note](https://github.com/mybatis/mybatis-3/releases))
* Spring Boot 2.6.6 ([Spring Boot Release Note](https://github.com/spring-projects/spring-boot/releases))