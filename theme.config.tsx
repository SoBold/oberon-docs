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
        component: () => (
            <div style={{ marginTop: '2rem', padding: '1rem' }}>
                <a
                    href="https://sobold.github.io/oberon-api/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#888',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                    }}
                >
                    Migration from Nextra v3 →
                </a>
            </div>
        ),
    },
};

export default config;
