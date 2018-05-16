var connectionFactory = (function(){
    
        const stores = ["negociacoes"];
        const dbName = "negociacoesDB";
        const version = 4;

        var connection = null;
        var close = null;

        return class ConnectionFactory {
        constructor() {
            throw new Error("Não é possivel criar instancias de ConnectionFactory");
        }
        static getConnection() {
            return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e => {
                resolve(ConnectionFactory._createStores(e.target.result));
            };
            openRequest.onsuccess = e => {
                if (!connection) {
                    connection = e.target.result;
                    close = connection.close.bind(connection);
                    connection.close = function (){
                        throw new Error('Você não pode fechar diretamente a conexão');
                    }
                }
                console.log(connection);
                resolve(connection);
            };

            openRequest.onerror = e => {
                console.log(e.target.error.name);
                reject(e.target.error.name);
            };
            });
        }

        static _createStores(connection) {
            stores.forEach(store => {
            if (connection.objectStoreNames.contains(store))
                connection.deleteObjectStore(store);

            connection.createObjectStore(store, { autoIncrement: true });
            });
        }

        static closeConnection(){
            if(connection){
                close();
                connection = null;
            }
        }
    }
})();