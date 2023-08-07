import Select from 'react-select';

export default function PlayerSelect(props) {
    const options = Object.keys(props.stats).map(name => {
        return {label: name, value: name};
    });;
    console.log(options);
    return (<div className='player-select'>
        <Select options={options}></Select>
    </div>);
}
