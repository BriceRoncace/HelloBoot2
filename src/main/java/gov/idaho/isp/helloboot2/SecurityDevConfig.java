package gov.idaho.isp.helloboot2;

import gov.idaho.isp.helloboot2.security.CsrfExceptionAccessDeniedHandler;
import gov.idaho.isp.helloboot2.security.CustomDatabaseUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.AccessDeniedHandler;

@Profile("dev")
@Configuration
@EnableWebSecurity
public class SecurityDevConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private CustomDatabaseUserDetailsService customDatabaseUserDetailsService;

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests()
      .antMatchers("/assets/**").permitAll()
      .antMatchers("/h2-console/**").permitAll()
      .anyRequest().authenticated()
      .and().formLogin().loginPage("/login").permitAll()
      .and().logout().logoutUrl("/logout").permitAll()
      .and().exceptionHandling().accessDeniedHandler(getAccessDeniedHandler());

    allowAdminAccessToH2Console(http);
  }

  private void allowAdminAccessToH2Console(HttpSecurity http) throws Exception {
    http.csrf().ignoringAntMatchers("/h2-console/**");
    http.headers().frameOptions().disable();
  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(customDatabaseUserDetailsService).passwordEncoder(getPasswordEncoder());
    auth.inMemoryAuthentication().withUser(User.builder().passwordEncoder(p -> getPasswordEncoder().encode(p)).username("user").password("u").roles("USER"));
  }

  @Bean
  public DaoAuthenticationProvider getDaoAuthProvider(CustomDatabaseUserDetailsService customDatabaseUserDetailsService ) {
    DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
    provider.setUserDetailsService(customDatabaseUserDetailsService);
    provider.setPasswordEncoder(getPasswordEncoder());
    return provider;
  }

  @Bean
  public PasswordEncoder getPasswordEncoder() {
    return new BCryptPasswordEncoder();
  }

  private AccessDeniedHandler getAccessDeniedHandler() {
    return new CsrfExceptionAccessDeniedHandler();
  }
}
