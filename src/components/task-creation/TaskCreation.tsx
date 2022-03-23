import { useForm } from 'react-hook-form';

interface FormFields {
  title: string;
  priority: 'low' | 'normal' | 'high';
}

export const TaskCreation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  // eslint-disable-next-line no-console
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <h1>Task Creation</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Task Title: </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: true })}
          />
          {errors.title?.type === 'required' && (
            <span> The task title is required!</span>
          )}
        </div>

        <div>
          <label htmlFor="priority">Task Priority: </label>
          <select
            id="priority"
            defaultValue=""
            {...register('priority', { required: true })}
          >
            <option value="" disabled hidden>
              --Please select a priority--
            </option>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
          {errors.priority?.type === 'required' && (
            <span> The task priority is required!</span>
          )}
        </div>

        <button type="submit">Create</button>
      </form>
    </>
  );
};
