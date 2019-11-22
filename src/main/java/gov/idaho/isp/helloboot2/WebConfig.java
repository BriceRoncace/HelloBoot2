package gov.idaho.isp.helloboot2;

import gov.idaho.isp.helloboot2.controller.interceptor.ProfileInterceptor;
import gov.idaho.isp.helloboot2.controller.interceptor.UserInterceptor;
import org.h2.server.web.WebServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
  private final Environment environment;

  public WebConfig(Environment environment) {
    this.environment = environment;
  }

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/login").setViewName("login");
    registry.addViewController("/es6-showcase").setViewName("es6-showcase");
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(new UserInterceptor());
    registry.addInterceptor(new ProfileInterceptor(environment));
  }

  @Bean
  ServletRegistrationBean h2servletRegistration() {
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(new WebServlet());
    registrationBean.addUrlMappings("/h2-console/*");
    return registrationBean;
  }
}
