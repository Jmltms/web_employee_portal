type InputProps = {
  title: string;
  placeholder: string;
  divclassname: string;
  type?: string;
};

function InputText({ title, type, placeholder, divclassname }: InputProps) {
  return (
    <div className={divclassname}>
      <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      <div className="relative mb-6">
        <input
          type={type}
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputText;
