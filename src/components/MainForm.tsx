import { Dispatch, FC, FormEvent, SetStateAction } from "react";

interface IProps {
  handleSubmitForm: (event: FormEvent<HTMLFormElement>) => void;
  sequenceLength: number | string;
  setSequenceLength: Dispatch<SetStateAction<number | string>>;
}

export const MainForm: FC<IProps> = ({ handleSubmitForm, sequenceLength, setSequenceLength }) => {
  return (
    <form onSubmit={handleSubmitForm} className="flex gap-3 flex-col">
      <input
        type="number"
        value={sequenceLength}
        max={10000000}
        min={2}
        name="sequenceLength"
        onChange={(e) => setSequenceLength(Number(e.target.value) || "")}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Generate sequence
      </button>
    </form>
  );
};
