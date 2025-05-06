// import React from 'react'
// import { DocsThemeConfig } from 'nextra-theme-docs'

// const config: DocsThemeConfig = {
//   logo: <span>Oberon</span>,
//   useNextSeoProps() {
//     return {
//       titleTemplate: '%s - Oberon'
//     }
//   },
//   project: {
//     link: 'https://github.com/SoBold/oberon',
//   },
//   docsRepositoryBase: 'https://github.com/SoBold/oberon-docs',
//   footer: {
//     text: 'Oberon Docs | SoBold',
//   },
// }

// export default config

import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
    logo: <span>Oberon</span>,
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Oberon',
        };
    },
    project: {
        link: 'https://github.com/SoBold/oberon',
    },
    docsRepositoryBase: 'https://github.com/SoBold/oberon-docs',
    footer: {
        text: 'Oberon Docs | SoBold',
    },
    sidebar: {
        extraContent: (
            <a
                href="https://sobold.github.io/oberon-api/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'block',
                    marginTop: '2rem',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    color: '#888',
                    textDecoration: 'none',
                }}
            >
                Api v1 →
            </a>
        ),
    },
};

export default config;
