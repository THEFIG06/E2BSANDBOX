import {
  Home,
  CheckCircle,
  MessagesSquare,
} from 'lucide-react'

import logoNode from '@/images/logos/node.svg'
import logoPython from '@/images/logos/python.svg'
import Image from 'next/image'

// @ts-ignore; generated by prebuild.ts

// Three parts
//
// 1. Documentation
//    - Concepts - "filesystem", "what is sandbox", ...
//    - How to's (guides?) - simple examples of things like "how to run AI-generated code" or "how to install custom packages" or "how to add language runtime" or "how to upload files" or "how to change current working directory" or "how to add another user" or "how to set up environment variables"
//      - This could be additionally split into parts like "Customization", "Running AI-generated code"
//    - Integrations
// 2. Cookbook?
// 3. API Reference
//    - API spec
//    - Python SDK
//    - JS SDK
//
//
//
//
// Note:
// - We need some kind of "first steps" that's super simple
// - Having something like
// - Maybe have following separate pages:
//   - Documentation
//   - Reference
//   - Integrations
//   - Cookbook
//


export interface NavLink {
  title: string
  href: string
  icon?: React.ReactNode
}

export interface NavSubgroup {
  title: string
  icon?: React.ReactNode
  links: NavLink[]
}

export interface NavGroup {
  title?: string
  icon?: React.ReactNode
  items: Array<NavLink | NavSubgroup>
}

export const routes: NavGroup[] = [
  {
    items: [
      {
        title: 'Home',
        href: '/docs',
        icon: <Home size={16} />,
      },
      {
        title: 'Quickstart',
        icon: <CheckCircle size={16} />,
        links: [
          {
            title: 'Running your first Sandbox',
            href: '/docs/quickstart',
          },
          {
            title: '* Connect LLMs to E2B',
            href: '/docs/quickstart/connect-llms',
          },
          {
            title: 'Upload & download files',
            href: '/docs/quickstart/upload-download-files',
          },
          {
            title: 'Install custom packages',
            href: '/docs/quickstart/install-custom-packages',
          },
        ],
      },
      {
        title: '* Support',
        href: '/docs/support',
        icon: <MessagesSquare size={16} />,
      },
      {
        title: '* Migrating from SDK v0.* to v1.*',
        href: '/docs/quickstart/migrating-from-v0',
      },
    ],
  },
  // {
  //   title: 'Quickstart',
  //   items: [
  //     {
  //       title: 'Running your first Sandbox',
  //       href: '/docs/hello-world/js',
  //     },
  //     {
  //       title: 'Connecting LLMs to E2B',
  //       links: [
  //         {
  //           title: 'OpenAI',
  //           href: '/docs/integrations/openai',
  //         },
  //         {
  //           title: 'Anthropic',
  //           href: '/docs/integrations/ai-sdk',
  //         },
  //         {
  //           title: 'Mistral',
  //           href: '/docs/integrations/ai-sdk',
  //         },
  //         {
  //           title: 'Vercel AI SDK',
  //           href: '/docs/integrations/ai-sdk',
  //         },
  //         {
  //           title: 'LangChain',
  //           href: '/docs/integrations/ai-sdk',
  //         },
  //         {
  //           title: 'LlamaIndex',
  //           href: '/docs/integrations/ai-sdk',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Uploading & downloading files',
  //       href: '/docs/code-execution/python',
  //     },
  //     {
  //       title: 'Install custom packages',
  //       href: '/docs/code-execution/python',
  //     },
  //   ]
  // },
  {
    title: '* Code Interpreting',
    items: [
      {
        title: '* Analyze data with AI',
        links: [
          {
            title: 'Overview',
            href: '/docs/code-interpreting/analyze-data',
          },
          {
            title: 'Pre-installed libraries',
            href: '/docs/code-interpreting/analyze-data/pre-installed-libraries',
          },
        ],
      },
      {
        title: '* Connect your data',
        href: '/docs/code-interpreting/connect-your-data',
      },
      {
        title: 'Supported languages',
        links: [
          {
            title: 'Overview',
            href: '/docs/code-interpreting/supported-languages',
          },
          {
            title: 'Python',
            href: '/docs/code-interpreting/supported-languages/python',
          },
          {
            title: 'JavaScript',
            href: '/docs/code-interpreting/supported-languages/javascript',
          },
          {
            title: 'R',
            href: '/docs/code-interpreting/supported-languages/r',
          },
          {
            title: 'Bash',
            href: '/docs/code-interpreting/supported-languages/bash',
          },
        ]
      },
      {
        title: '* Code interpreting results',
        href: '/docs/code-interpreting/todo',
      },
    ]
  },
  // {
  //   title: 'Guides', // How to's
  //   items: [
  //     {
  //       title: 'Set working directory',
  //       href: '/docs/f',
  //     },
  //     {
  //       title: 'Link specific sandbox with user',
  //       href: '/docs/g',
  //     }
  //   ]
  // },
  {
    title: '* AI Code Execution',
    items: [
      {
        title: '* Python',
        href: '/docs/code-execution/python',
        icon: <Image src={logoPython} alt="Python" width={20} height={20} />,
      },
      {
        title: '* JavaScript',
        href: '/docs/code-execution/python',
        icon: <Image src={logoNode} alt="JavaScript" width={20} height={20} />,
      },
      {
        title: '* TypeScript',
        href: '/docs/code-execution/python',
      },
      {
        title: '* Custom language',
        href: '/docs/code-execution/python',
      },
      {
        title: '* Web frameworks',
        links: [
          {
            title: '* Next.js',
            href: '/docs/code-execution/python',
          },
          {
            title: '* React',
            href: '/docs/code-execution/python',
          },
          {
            title: '* Svelte',
            href: '/docs/code-execution/python',
          },
          {
            title: '* Vue.js',
            href: '/docs/code-execution/python',
          },
          {
            title: '* Streamlit',
            href: '/docs/code-execution/python',
          },
          {
            title: '* Gradio',
            href: '/docs/code-execution/python',
          },
        ],
      },
    ],
  },
  {
    title: '* Sandbox',
    items: [
      {
        title: '* Lifecycle',
        href: '/docs/sandbox/lifecycle',
      },
      {
        title: '* Metadata',
        href: '/docs/sandbox/filesystem',
      },
      {
        title: '* Environment variables',
        href: '/docs/sandbox/environment-variables',
      },
      {
        title: '* Persistence',
        href: '/docs/sandbox/persistence',
      },
      {
        title: '* Customization',
        links: [
          {
            title: '* Overview',
            href: '/docs/sandbox/custom',
          },
          {
            title: '* CPU & RAM',
            href: '/docs/sandbox/custom/compute',
          },
          {
            title: '* Preinstall packages (TODO: Better title for custom sandbox templates)',
            href: '/docs/sandbox/custom/sandbox-template',
          },
        ]
      },
    ],
  },
  {
    title: '* Filesystem',
    items: [
      {
        title: '* Overview',
        href: '/docs/filesystem/overview',
      },
      {
        title: '* Read & write',
        href: '/docs/filesystem/read-write',
      },
      {
        title: '* Watch directory for changes',
        href: '/docs/filesystem/watch',
      },
      {
        title: '* Upload data',
        href: '/docs/filesystem/upload',
      },
      {
        title: '* Download data',
        href: '/docs/filesystem/download',
      },
    ]
  },
  {
    title: '* Commands',
    items: [
      {
        title: '* Overview',
        href: '/docs/process/overview',
      },
      {
        title: '* Run commands',
        href: '/docs/process/overview',
      },
      {
        title: '* Run commands in background',
        href: '/docs/process/overview',
      },
    ]
  },
  {
    title: '* Async Python SDK',
    items: [
      {
        title: '* Overview',
        href: '/docs/sdk/overview',
      },
    ]
  },
  {
    title: '* CLI',
    items: [
      {
        title: '* Installation',
        href: '/docs/cli/install',
      },
      {
        title: '* List running sandboxes',
        href: '/docs/cli/list',
      },
      {
        title: '* Shutdown all running sandboxes',
        href: '/docs/cli/kill-all',
      },
    ]
  },
  // {
  //   // Maybe move integrations to a separate docs page?
  //   title: 'Integrations',
  //   items: [
  //     {
  //       title: 'OpenAI',
  //       href: '/docs/integrations/openai',
  //     },
  //     {
  //       title: 'Vercel AI SDK',
  //       href: '/docs/integrations/ai-sdk',
  //     },
  //     {
  //       title: 'Langchain',
  //       href: '/docs/integrations/ai-sdk',
  //     },
  //   ]
  // },
  // ...apiRefRoutes,
]

