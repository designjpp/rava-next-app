[![logo](https://cdn.grupojpp.com.br/wp-content/uploads/2019/05/marca-Rava-site.svg)](https://grupojpp.com.br/brand/rava/)

# Rava Cycle Site Institucional

Site institucional para as marcas do [Grupo JPP](http://grupojpp.com.br).
Feed de produtos via rest-api provida pelo Woocoomerce.

O site foi desenvolvido em [React](https://github.com/facebook/react/) e precisa do
[Node](https://nodejs.org) para execução.

com base no [NextJS](https://nextjs.org/), pela necessidade de SSR, Optimização SEO ealimentação em tempo real via Api. Demais dependências listadas a baixo:

- [react-lazy-load-image-component](https://github.com/Aljullu/react-lazy-load-image-component)
- [mobile-detect](http://hgoebl.github.io/mobile-detect.js/)
- [react-inlinesvg](https://github.com/gilbarbara/react-inlinesvg#readme)
- [Styled Components](https://github.com/styled-components/styled-components)

### 📦 Install

```
$ git clone https://github.com/guilouro/simple-nextjs-quick-start.git

$ yarn install
```

Execução no modo desenvolvedor.

Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

#### 🚧 Env

```
.env
WORDPRESS_API_URL=https://grupojpp.com.br/

GOOGLE_ANALYTICS=XXX
ALGOLIA_APP_ID=ST2C30NRR7
ALGOLIA_SEARCH_KEY=7de48bdd8f461ea96687faf441be89de
ALGOLIA_INDEX_NAME=wp_searchable_posts

# social profile
INSTAGRAM_PROFILE=ravacycle

# Woocommerce Keys
CONSUMER_KEY=ck_0a6781c8d841519ec3bb7477bc56dd433295904f
CONSUMER_SECRET=cs_bc0e5eb9863eecef7534033aeddbabf44e10b8e9
```

### 🔨 How to use

Runs next which starts Next.js in development mode

```bash
$ yarn dev
```

Runs next build which builds the application for production usage

```bash
$ yarn build
```

Runs next start which starts a Next.js production server

```bash
$ yarn start
```

Runs next build and export which exports a files in a `out` folder to deploy

```bash
$ yarn deploy
```

### 🚀 Deploy

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

Deploy the example using [Vercel](https://vercel.com):
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/designjpp/rava-next-app)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/designjpp/rava-next-app)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
