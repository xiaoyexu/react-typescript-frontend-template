import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { execSync } from 'child_process';
import pkg from './package.json';

const getGitInfo = () => {
  try {
    return {
      commitHash: execSync('git rev-parse --short HEAD').toString().trim(),
      branch: execSync('git rev-parse --abbrev-ref HEAD').toString().trim(),
      lastCommitTime: execSync('git log -1 --format=%cd --date=iso')
        .toString()
        .trim()
    };
  } catch {
    return {
      commitHash: 'unknown',
      branch: 'unknown',
      lastCommitTime: new Date().toISOString()
    };
  }
};

const gitInfo = getGitInfo();

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    proxy: {
      '/open-api/v1': {
        target: 'http://localhost:6666',
        changeOrigin: true,
        secure: true
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: '/tadmin/',
  envDir: './env',
  build: {
    target: 'esnext',
    outDir: 'dist'
  },
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __GIT_COMMIT__: JSON.stringify(gitInfo.commitHash),
    __GIT_BRANCH__: JSON.stringify(gitInfo.branch),
    __APP_ENV__: JSON.stringify(process.env.NODE_ENV)
  }
});
