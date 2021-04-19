import React, { useState } from 'react';

export function BodyCamConfigurator() {
  const [brandCamera, setBrandName] = useState('');
  const [policeName, setPoliceName] = useState('');
  const [policeDepartement, setPoliceDepartement] = useState('');
  const [policerMatricule, setPolicerMatricule] = useState(100);

  const [darkMode, setDarkMode] = useState(true);
  const [dashCamStatus, setDashCamStatus] = useState(true);
  const [twelveHoursSys, setTwelveHoursSys] = useState(false);

  let link = `http://localhost:3000/overlay/cameraBrand=${brandCamera}&policeName=${policeName}&policeDepartement=${policeDepartement}&policeNumner=${policerMatricule}&darkMode=${darkMode}&dashcamstatus=${dashCamStatus}&twelvehours=${twelveHoursSys}`;

  return (
    <div>
      <div className="bodyCamConfigurator mt-6 grid-configurator">
        <div className="configurator1">
          <input
            type="text"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-900 bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="Brand Camera"
            value={brandCamera}
            onChange={(e) => setBrandName(e.currentTarget.value)}
          />
        </div>
        <div className="configurator2">
          <input
            type="text"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-900 bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="Police Name"
            value={policeName}
            onChange={(e) => setPoliceName(e.currentTarget.value)}
          />
        </div>
        <div className="configurator3">
          <input
            type="number"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-900	bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="Police Matricule"
            maxLength={3}
            min={1}
            minLength={1}
            value={policerMatricule}
            onChange={(e) => setPolicerMatricule(e.currentTarget.value)}
          />
        </div>
        <div className="configurator4">
          <input
            type="text"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-900 bg-gray-900 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="Police Departement"
            value={policeDepartement}
            onChange={(e) => setPoliceDepartement(e.currentTarget.value)}
          />
        </div>
        <div className="configurator5">
          <div data-tip="DarkMode pour la dashcam">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 cursor-pointer	"
              defaultChecked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="ml-2 text-blueGray-600">DarkMode</span>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 cursor-pointer	"
              defaultChecked={dashCamStatus}
              onChange={() => setDashCamStatus(!dashCamStatus)}
            />
            <span className="ml-2 text-blueGray-600">DashCam On</span>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 cursor-pointer"
              defaultChecked={twelveHoursSys}
              onChange={() => setTwelveHoursSys(!twelveHoursSys)}
            />
            <span className="ml-2 text-blueGray-600">12H System</span>
          </div>
        </div>
        <div
          className="configurator6"
          data-tip="Vous pouvez créer un lien qui vous permettra de l'afficher sur votre live.">
          <a
            target="_blank"
            onClick={() => navigator.clipboard.writeText(link)}
            href={link}
            className="py-2 px-4 bg-emerald-500 text-white font-semibold rounded-lg bg-green-500 shadow-md focus:outline-none w-full"
            rel="noreferrer">
            Crée le lien.
          </a>
        </div>
      </div>
    </div>
  );
}