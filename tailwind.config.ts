import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'blue':{
        'primary':'#5847eb',
        'soft':'#56c2e6',
        'dark':'#1c1f4a',
        'darker':'#0f1424',
        'desaturated':'#6f76c8',
      },
      'red':{
        'work':'#ff8c66',
        'study':'#ff5c7c'
      },
      'lime':'#4acf81',
      'violet':'#7536d3',
      'orange':'#f1c65b',
      'grey':'#bdc1ff',
      'white':'#FFFFFF',
    }
  },
  plugins: [],
}
export default config
