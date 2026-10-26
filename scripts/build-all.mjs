import { spawnSync } from 'node:child_process';

for (let numero = 1; numero <= 7; numero++) {
  const projeto = `exercicio-${String(numero).padStart(2, '0')}`;
  const resultado = spawnSync(process.execPath, [
    'node_modules/@angular/cli/bin/ng.js', 'build', projeto
  ], { stdio: 'inherit' });
  if (resultado.status !== 0) {
    process.exit(resultado.status ?? 1);
  }
}
