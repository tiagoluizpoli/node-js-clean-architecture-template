import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test'),
    '@Api': path.join(files, 'src/Api'),
    '@Application': path.join(files, 'src/Application'),
    '@Contracts': path.join(files, 'src/Contracts'),
    '@Domain': path.join(files, 'src/Domain'),
    '@Infrastructure': path.join(files, 'src/Infrastructure'),
});
