import React from "react";
import Typewriter from "typewriter-effect";
import { useI18n } from "../../i18n/I18nContext";

function Type() {
  const { t } = useI18n();
  const roles = t("type.roles");
  return (
    <Typewriter
      key={Array.isArray(roles) ? roles.join("|") : "default"}
      options={{
        strings: Array.isArray(roles) ? roles : [],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
