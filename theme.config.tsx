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
};

export default config;
