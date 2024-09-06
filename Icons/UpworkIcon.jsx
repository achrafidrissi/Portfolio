import { useState } from 'react';

const UpworkIcon = () => {
    /*<img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVR4nO2Tz2sTQRTHBw8V9aCIP7Aioqj4J3Rnd7sz/YWgBy/Bi+4m2ZDazkQs9uTBoiDoQdCDCKInPXlvIdGGpEnToLGGnRGFgKUiCCXFX+AvTCOTZpJJWpCEeNIH77Jv5n2+831vAfgffwp3xphaTXizuXYmbxyp1Wf1q6CdsKNaWaQ/ri8318JZ46SsO4+1UmTq0Ma/BrCjWjmUMS6q9ci8sZMyfIMyXCAMfyYML1CO7tC8eaAtQCCuv5e10Zd4P+XoHeW4vCYZ/jLKrWMtA+wYLBOvX5vgvi7KEJcNhXrK8TPK0UcVMuL1H2wNENXExRT1rNNKo+wYH9peOZ87sZkw/LAORndbGrItAJWmqFhtUKKedVS9M5bp2UQYWq5C3gI7JgHwQzPATZunJCCYgPnANPzW6DV6vt7iiFdVBXwHUpkTgyXnhbVNPRhKmg9qgJQ+6c72nquolhZwfHvNq3MDWwlDn6r1NyCQ0At1lfrC+aS5p6I+ZQ5LuEg3Y/nEd8LRfXWQhOHxC/nBLfW1RZOKgFsgnDWHxHY0DFNpbIv1TBiLUqE6RGWYPwhDi5SjX4p9RfJqoLtyKZg2JpyYttK8MXI2w5m+vYq/BemvaLzef0A4XoowDBu8C2WtHjepz/un4VfnifbTH4dFNw3v+R75uuQZ/1zvYcrwymoTFB1h5j7C8XXCcU74TTl6Shi6En5t7QDthJs2Lin+XwadjmBST9QAHjrecYA/Dpck4Gx+cFdnu5fBBvGv1Pa70+F6fbuDM3COMnyNcBzoOAD8s/EbrwcHCCX25OMAAAAASUVORK5CYII="
    />*/
    const [hover, setHover] = useState(false);
    const styles = {
        filter: hover
            ? 'brightness(0) saturate(100%) invert(32%) sepia(79%) saturate(2864%) hue-rotate(74deg) brightness(99%) contrast(102%)'
            : 'none',
        transition: 'filter 0.3s ease',
    };
    return (
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6UlEQVR4nO3US4iPYRQG8B+GRhbKbDQug2IjsbCwc09ZTISSDZMySZJSosQKZSNlFnKZFQtFSXKblCRGCSFlNwv3xp3c9dbz15dmYaZZKE59fe/7nnPe55zzPN/Hf/sb7B5+5HmPaRXfpYrvM5r7AlCSr+Bw1osqvie4id14hLO/5dZjBXZiHzagqSeAHam8J4C2rLfhK0ZlvwBPk/MJLyqd7kFdbwEa8QV7MT9gpbtZlcuaEv8dRzGgNwDFDuFDxnUbw7EJXehGO0Zgc+5a2luAkXiTuLloyfoM9ge88DQQD3DxTwGGoAMzsQbH47+Dy7VRYGPuGB3SX5bDj9iFCXGuTHBdZFsUNC6+W5V5N+asKKdmq3I2MUS/q1VxIW09zDyLYk4leA6WVb6HklhsavblO1qP1go3paNruF4Ct4b1ooYpuBq1PE5ifZLu4zTeViqeHV8NvKhqEpZkv64EDUsV3TXWMSjv8Zl9AZyH8+hMt22peijGYGzyWkN2KXRwrZJCyo2gdkUJndF6Uc3ixD3HAUyuVP06oyhjfpazc2iodPqr6uU4FvQTGV9DpYiSvBars25JJx353RzBQn205lw6Awfza6jJs19se0ZWOLsbwvvVTuIVtuBbpNyv1l4htqhken8D+DftJzfdpKb4kvMcAAAAAElFTkSuQmCC"
            alt="Upwork Logo"
            style={styles}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        />
    );
};

export default UpworkIcon;
