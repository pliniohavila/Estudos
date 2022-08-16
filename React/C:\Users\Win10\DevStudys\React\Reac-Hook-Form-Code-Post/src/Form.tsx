import React = require('react');
import { useForm } from 'react-hook-form';

type FormValues = {
  nome: string;
  sobrenome: string;
  telefone: number;
};

export function Form() {
  const { register, handleSubmit, watch, reset } = useForm<FormValues>();

  function onDataSubmit(data: FormValues) {
    console.log(data);
    reset();
  }

  const observaNome = watch('nome');

  return (
    <div>
      <h1>Fomulário de exemplo</h1>
      <form onSubmit={handleSubmit(onDataSubmit)}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          {...register('nome', {
            required: true,
          })}
        />

        <label htmlFor="sobrenome">Sobrenome</label>
        <input
          type="text"
          {...register('sobrenome', {
            required: true,
          })}
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          type="number"
          {...register('telefone', {
            valueAsNumber: true,
          })}
        />

        <button type="submit" disabled={!observaNome}>
          {' '}
          Enviar{' '}
        </button>
      </form>
    </div>
  );
}
