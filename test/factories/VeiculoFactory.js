import { connection } from "../../src/configs/Database";

export class VeiculoFactory {
    static async createVeiculo(modelo, placa, ano, cor, valor, idCliente, idMontadora) {
        const [result] = await connection.execute(
            `INSERT INTO veiculos (modelo, placa, ano, cor, valor, IdCliente, IdMontadora)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [modelo, placa, ano, cor, valor, idCliente, idMontadora]
        );
        return {
            id: result.insertId,
            modelo,
            placa,
            ano,
            cor,
            valor,
            idCliente,
            idMontadora
        };
    }
}