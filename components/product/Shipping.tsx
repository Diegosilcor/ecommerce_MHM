import {faUndo} from '@fortawesome/free-solid-svg-icons/faUndo';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons/faPhoneVolume';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const shippingInfo = [
	{id: 1, icon: faCalendarAlt, text: 'Garantía extendida por 30 días.'},
	{id: 2, icon: faUndo, text: '¿Cambiaste de idea? ¡Ningún problema!'},
	{id: 3, icon: faPhoneVolume, text: 'Línea de atención al cliente'},
];

export default function ProductShipping() {
	return (
		<div className='product-page__shipping'>
			{shippingInfo.map(row => (
				<div className='product-page__shipping-row' key={row.id}>
					<span className='product-page__shipping-icon'>
						<FontAwesomeIcon icon={row.icon} size='2x' />
					</span>
					{row.text}
				</div>
			))}
		</div>
	);
}