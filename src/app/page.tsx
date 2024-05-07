"use client";
import { MainForm } from "@/components/MainForm";
import { findMissingNumbersBinarySearch } from "@/helpers/functions/findMissingNumbersBinarySearch";
import { findMissingNumbersWithBruteForce } from "@/helpers/functions/findMissingNumbersWithBruteForce";
import { generateRandomNumber } from "@/helpers/functions/generateRandomNumber";
import { generateSequenceWithMissingNumbers } from "@/helpers/functions/generateSequenceWithMissingNumbers";
import { FormEvent, useState } from "react";

export default function Home() {
  const [sequenceLength, setSequenceLength] = useState<number | string>(10000);
  const [timeBruteForce, setTimeBruteForce] = useState<number | null>(null);
  const [timeBinarySearch, setTimeBinarySearch] = useState<number | null>(null);
  const [resultBruteForse, setResultBruteForse] = useState<string | null>(null);
  const [resultBinarySearch, setResultBinarySearch] = useState<string | null>(null);
  const [sequence, setSequence] = useState<string | null>(null);
  const [missingNumbers, setMissingNumbers] = useState<[number, number] | null>(null);

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!sequenceLength || typeof sequenceLength !== "number") return setSequenceLength(0);

    const randomNumberFirst = generateRandomNumber(sequenceLength);
    const randomNumberSecond = generateRandomNumber(sequenceLength, [randomNumberFirst]);

    setMissingNumbers([randomNumberFirst, randomNumberSecond]);

    const sequence = generateSequenceWithMissingNumbers(sequenceLength, [
      randomNumberFirst,
      randomNumberSecond,
    ]);

    setSequence(sequence.join(", "));
    console.log("sequence ==> ", sequence);

    const timeStartBruteForce = performance.now();
    const missingNumbersBruteForse = findMissingNumbersWithBruteForce(sequence, sequenceLength);
    const timeEndBruteForce = performance.now();

    setTimeBruteForce(timeEndBruteForce - timeStartBruteForce);

    const timeStartBinarySearch = performance.now();
    const missingNumbersBinarySearch = findMissingNumbersBinarySearch(sequence);
    const timeEndBinarySearch = performance.now();

    setTimeBinarySearch(timeEndBinarySearch - timeStartBinarySearch);

    setResultBruteForse(missingNumbersBruteForse.join(", "));
    setResultBinarySearch(missingNumbersBinarySearch.join(", "));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      <div>
        <div className="w-[450px]">
          <p className="font-bold flex mb-3 text-2xl">Finding missing numbers:</p>
          <MainForm
            handleSubmitForm={handleSubmitForm}
            sequenceLength={sequenceLength}
            setSequenceLength={setSequenceLength}
          />
          <div className=" flex gap-3 items-center mt-4 mb-4">
            <p className="font-semibold text-xl">Missing numbers:</p>
            <p>[ {missingNumbers?.sort((a, b) => a - b).join(", ")} ]</p>
          </div>

          <div className="">
            <p className="font-semibold text-xl">Brute Force Method:</p>
            <p>
              <span className="font-medium">Сomputational complexity:</span> O(n)
            </p>
            <p>
              <span className="font-medium">Result:</span> [ {resultBruteForse} ]
            </p>
            <p>
              <span className="font-medium">Time:</span> {timeBruteForce && timeBruteForce.toFixed(4)} ms
            </p>
          </div>

          <div className="mt-5">
            <p className="font-semibold text-xl">Binary Search Method:</p>
            <p>
              <span className="font-medium">Сomputational complexity:</span> O(n)
            </p>
            <p>
              <span className="font-medium">Result:</span> [ {resultBinarySearch} ]
            </p>
            <p>
              <span className="font-medium">Time:</span> {timeBinarySearch && timeBinarySearch.toFixed(4)} ms
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-8 pl-2 pr-2 text-center">
        <p className="font-bold text-xl pb-3">Sequence with missing numbers: </p>

        {sequence && sequence?.length > 100000 ? (
          <p className="mt-2 font-bold text-red-700 max-w-[350px]">
            There is too much data to render, the array can be seen in the dev tools in the
            &quot;Console&quot; tab.
          </p>
        ) : (
          <p>[ {sequence} ]</p>
        )}
      </div>
    </main>
  );
}
