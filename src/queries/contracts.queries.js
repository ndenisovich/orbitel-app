const getContracts = "SELECT * FROM contracts";
const getContractsById = "SELECT * FROM contracts WHERE contract_id = $1";
const checkConnectionAddress = "select connect_address from contracts c WHERE c.connect_address = $1";
const addContract = "INSERT INTO contracts(connect_address,contract_number, personal_account, contract_client_id) VALUES ($1, $2, $3, $4)";
const removeContract = "DELETE FROM contracts WHERE contract_id = $1";
const updateContract = "UPDATE contracts SET connect_address = $1 WHERE contract_id = $2";
module.exports = {
    getContracts,
    getContractsById,
    addContract,
    removeContract,
    updateContract,
};