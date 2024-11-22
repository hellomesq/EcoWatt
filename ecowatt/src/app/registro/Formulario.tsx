import React, { useState } from "react";
import './registro.css';

const SurveyForm: React.FC = () => {
    const [formData, setFormData] = useState({
        question_1: "",
        question_2: "",
        question_3: "",
    });

    const [currentQuestion, setCurrentQuestion] = useState(1); // Pergunta atual

    // Função para mudar o valor do campo
    const handleInputChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Função para avançar na pergunta
    const nextQuestion = () => {
        if (currentQuestion < 3) setCurrentQuestion(currentQuestion + 1);
    };

    // Função para voltar para a pergunta anterior
    const prevQuestion = () => {
        if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form data:", formData);
    };

    return (
        <div className="survey-form-container">
            <div className="survey-header">
                <h1>Participe do nosso formulário</h1>
                <p>Compartilhe suas informações e nos ajude a criar dicas de economia personalizadas para o seu dia a dia.</p>
            </div>
            <div className="survey-form">
                <form onSubmit={handleSubmit}>
                    {/* Barra de Progresso */}
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${(currentQuestion / 3) * 100}%` }}></div>

                    </div>

                    {/* Pergunta 1 */}
                    {currentQuestion === 1 && (
                        <div className="form-group">
                            <h2>Com que frequência você usa aparelhos eletrônicos de alto consumo (ex. ar condicionado, aquecedores, forno elétrico)?
                            </h2>
                            <select
                                name="question_1"
                                value={formData.question_1}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecione uma opção</option>
                                <option value="Never">Diariamente</option>
                                <option value="Less than a year">Algumas vezes por semana</option>
                                <option value="More than a year">Raramente</option>
                                <option value="More than a year">Quase nunca</option>
                            </select>
                        </div>
                    )}

                    {/* Pergunta 2 */}
                    {currentQuestion === 2 && (
                        <div className="form-group">
                            <h2>What do you think about the product?</h2>
                            <select
                                name="question_2"
                                value={formData.question_2}
                                onChange={handleInputChange}
                            >
                                <option value="">Select an option</option>
                                <option value="Good">Good</option>
                                <option value="Average">Average</option>
                                <option value="Bad">Bad</option>
                            </select>
                        </div>
                    )}

                    {/* Pergunta 3 */}
                    {currentQuestion === 3 && (
                        <div className="form-group">
                            <h2>What features do you like?</h2>
                            <select
                                name="question_3"
                                value={formData.question_3}
                                onChange={handleInputChange}
                            >
                                <option value="">Select an option</option>
                                <option value="Feature 1">Feature 1</option>
                                <option value="Feature 2">Feature 2</option>
                                <option value="Feature 3">Feature 3</option>
                            </select>
                        </div>
                    )}

                    {/* Botões de navegação */}
                    {/* Botões de navegação */}
                    <div className="buttons-container">
                        <button
                            className="prev-btn"
                            type="button"
                            onClick={prevQuestion}
                            disabled={currentQuestion === 1}
                        >
                            Prev
                        </button>
                        {currentQuestion === 3 ? (
                            <button className="next-btn" type="submit">
                                Submit
                            </button>
                        ) : (
                            <button className="next-btn" type="button" onClick={nextQuestion}>
                                Next
                            </button>
                        )}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SurveyForm;
