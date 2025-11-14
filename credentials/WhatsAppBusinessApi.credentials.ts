import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class WhatsAppBusinessApi implements ICredentialType {
	name = 'whatsAppBusinessApi';
	displayName = 'WhatsApp Business API';
	documentationUrl = 'https://developers.facebook.com/docs/whatsapp';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'El token de acceso de tu app de WhatsApp Business',
		},
	];
}
