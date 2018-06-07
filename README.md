# electron-semantic-boilerplate

Start point for ElectronJS projects with ReactJS and SemanticUI.

## Usage

Clone the repo and install dependencies:

```bash
git clone https://github.com/unnamed-community/electron-semantic-boilerplate.git
cd electron-semantic-boilerplate
npm install
```

## Running the project

To run the project run in a terminal:

```bash
npm run build-dev
```

Do not close the terminal, open another and run:

```bash
npm run dev
```

## Generating dist files

To generate dist files from the project run:

**On Linux**
```bash
npm run dist-linux
```

**On Windows**
```powershell
npm run dist-windows
```

The `dist` folder will be generated. The `.deb` or `.msi` file will be inside it.

> For further dist config, edit the `build` config in `package.json` acording [electron-builder documentation](https://www.electron.build/configuration/configuration).
