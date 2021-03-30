import React from 'react';

import GithubIcon from '~/components/images/icons/GithubIcon';
import MailIcon from '~/components/images/icons/MailIcon';
import LinkedinIcon from '~/components/images/icons/LinkedinIcon';
import YoutubeIcon from '~/components/images/icons/YoutubeIcon';

const socialData = [
  {
    url: 'https://github.com/joelhoelting',
    icon: <GithubIcon />
  },
  {
    url: 'mailto:joel@joelhoelting.com',
    icon: <MailIcon />
  },
  {
    url: 'https://www.linkedin.com/in/joel-hoelting',
    icon: <LinkedinIcon />
  },
  {
    url: 'https://www.youtube.com/channel/UCwpMcEuy-PbV2fdv1-0WYfQ',
    icon: <YoutubeIcon />
  }
];

export default socialData;
