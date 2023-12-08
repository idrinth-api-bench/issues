module.exports = {
    recursive: true,
    extension: [
        'ts'
    ],
    'node-option': [
        'experimental-specifier-resolution=node',
        'loader=ts-node/esm'
    ],
    parallel: false
}
