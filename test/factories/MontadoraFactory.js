import { connection } from "../../src/configs/Database";

export class MontadoraFactory {
    static async createMontadora(nome, pais) {
        const [result] = await connection.execute(
            `INSERT INTO montadoras (nome, pais)
             VALUES (?, ?)`,
            [nome, pais]
        );
        return {
            id: result.insertId,
            nome,
            pais
        };
    }
}