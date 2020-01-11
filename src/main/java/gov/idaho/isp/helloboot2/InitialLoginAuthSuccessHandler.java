package gov.idaho.isp.helloboot2;

import java.io.IOException;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.web.servlet.FlashMap;
import org.springframework.web.servlet.FlashMapManager;
import org.springframework.web.servlet.support.SessionFlashMapManager;

public class InitialLoginAuthSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
  @Override
  public void onAuthenticationSuccess(HttpServletRequest req, HttpServletResponse res, Authentication auth) throws ServletException, IOException {
    final FlashMapManager flashMapManager = new SessionFlashMapManager();
    flashMapManager.saveOutputFlashMap(asFlashMap(Map.of("initialLogin", true)), req, res);
    super.onAuthenticationSuccess(req, res, auth);
  }

  private FlashMap asFlashMap(Map<String,Object> map) {
    FlashMap flashMap = new FlashMap();
    flashMap.putAll(map);
    return flashMap;
  }
}
