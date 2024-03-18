function getDomain(table) {    
    return `SELECT * FROM ${table}`;
}

function myrun(table) {    
    return `SELECT * FROM ${table}`;
}

module.exports = {
    getDomain,
    myrun  

}
