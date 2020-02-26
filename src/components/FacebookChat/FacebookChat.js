import React, { useEffect } from 'react';

let initialized = false;

const FacebookChat = () => {
  useEffect(() => {
    if (!initialized) {
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: 'v3.3',
        });
      };

      const script = document.createElement('script');
      script.setAttribute('async', 'true');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      document.body.appendChild(script);

      // const chatScript = document.createElement('script');
      // chatScript.id = 'facebook-jssdk';
      // chatScript.src =
      //   'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      // document.body.appendChild(chatScript);

      (function(d, s, id) {
        // not working -->
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        // <-- not working

        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');

      initialized = true;
    }

    return () => {
      // const facebookChat = document.getElementById('facebookChat');
      // Should it be removed?
    };
  }, []);

  return (
    <div>
      <div
        id="facebookChat"
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="546681475406388"
        greeting_dialog_display="hide"
        theme_color="#3719CA"
      ></div>
    </div>
  );
};

export default FacebookChat;
