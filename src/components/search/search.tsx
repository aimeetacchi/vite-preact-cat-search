import { useForm, SubmitHandler } from "react-hook-form";
import { FormStyles } from './search.styles'

type Inputs = {
    catbreed: string,
  };

interface SearchProps {
    fetchCats: (breed: string) => void;
}

  
function Search({fetchCats}: SearchProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) =>{
      console.log(data);
      fetchCats(data.catbreed)
    }

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* include validation with required or other standard HTML validation rules */}
       
        {/* errors will return when field validation fails  */}
       


        <div className="form__group field">
          <input type="input" className="form__field" placeholder="search breed" id='search-breed' {...register("catbreed", { required: true })} />
          {errors.catbreed && <span className="form__error">This field is required</span>}
          <label for="name" className="form__label">Search Breed</label>
        </div>
        <div className="form__group field">
          <input className="form__submit" type="submit" />
        </div>
      </FormStyles>
  )
}

export default Search