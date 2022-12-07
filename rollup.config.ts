import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/public-api.ts',
  output: [
    {
      file: './bundles/index.js',
      format: 'umd',
      name: 'colorPicker',
      sourcemap: false
    },
    {
      file: './bundles/index.esm.js',
      format: 'esm',
      sourcemap: false
    }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig-build.json'
    })
  ]
}
