
export const SelectForm = ({ register, title, options = [], error = null }) => {
  return (
    <div>
      <label htmlFor={`${title}`} className="form-label ">
        { title }
      </label>

      <select 
        {...register} 
        className={ `${ error ? "has-error" : "" } form-control py-2 ` }
      >
        <option value="" disabled>Seleccione una opcion</option>
        {
            options.map(op => (
                <option key={ op.id } value={ op.id }>{ op.nombre }</option>
            ))
        }
      </select>
      {error && <p className="mt-2 text-danger-500 block text-sm">{error.message}</p>}
    </div>
  )
}
