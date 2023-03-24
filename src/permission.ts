export enum ROLE_TYPE {
  OWNER = 'OWNER',
  COMMUNITY_ADMIN = 'COMMUNITY_ADMIN',
  COMMUNITY_MEMBER = 'COMMUNITY_MEMBER', // deprecated
  GROUP_ADMIN = 'GROUP_ADMIN',
  GROUP_MEMBER = 'GROUP_MEMBER', // deprecated
  MEMBER = 'MEMBER',
  CUSTOMIZED = 'CUSTOMIZED', // not used yet
}

export const PERMISSION_KEY = {
  // Organization
  CRUD_CUSTOM_SCHEME: 'crud_custom_scheme',
  CREATE_DELETE_ARCHIVE_GROUPS: 'create_delete_archive_groups',
  ORDER_MOVE_GROUP_STRUCTURE: 'order_move_group_structure',
  CUD_TAGS: 'cud_tags',

  // Management
  INVITE_MEMBER: 'invite_member',
  ADD_MEMBER: 'add_member',
  REMOVE_MEMBER: 'remove_member',
  APPROVE_REJECT_JOINING_REQUESTS: 'approve_reject_jr',
  ASSIGN_UNASSIGN_ROLE: 'assign_unassign_role',

  // Settings
  EDIT_JOIN_SETTING: 'edit_join_setting',
  EDIT_INFO: 'edit_info',
  EDIT_PRIVACY: 'edit_privacy',
  EDIT_POST_APPROVAL_SETTING: 'edit_post_approval_setting',
  CREATE_CUSTOM_EMOJI: 'create_custom_emoji',
  CUD_TERMS: 'cud_terms',

  // Post/article
  CRUD_POST_ARTICLE: 'crud_post_article',
  CRUD_SERIES: 'crud_series',
  ASSIGN_CONTENT_OWNER: 'assign_content_owner',
  EDIT_POST_OF_INACTIVE_USER: 'edit_post_of_inactive_user',
  EDIT_OWN_CONTENT_SETTING: 'edit_own_content_setting',
  PUBLISH_UNPUBLISH_POST: 'publish_unpublish_post',

  // CHAT Channel
  CRUD_UNOFFICIAL_CHANNEL: 'crud_uc',
  SEND_MESSAGE: 'send_message',
  EDIT_OWN_MESSAGE: 'edit_own_message',
  DELETE_OWN_MESSAGE: 'delete_own_message',
  CHANNEL_MENTIONS: 'channel_mentions',
  DELETE_OTHERS_MESSAGE: 'delete_others_message',
  PIN_MESSAGE: 'pin_message',

  // Permission key by role
  ROLE_COMMUNITY_OWNER: `role_${ROLE_TYPE.OWNER}`,
  ROLE_COMMUNITY_ADMIN: `role_${ROLE_TYPE.COMMUNITY_ADMIN}`,
  ROLE_GROUP_ADMIN: `role_${ROLE_TYPE.GROUP_ADMIN}`,
};

export const CHAT_FIXED_PERMISSIONS = ['read_channel'];

export const CHAT_PERMISSIONS_MAP: { [k: string]: string } = {
  [PERMISSION_KEY.CRUD_UNOFFICIAL_CHANNEL]: 'create_private_channel',
  [PERMISSION_KEY.SEND_MESSAGE]: 'create_post',
  [PERMISSION_KEY.EDIT_OWN_MESSAGE]: 'edit_post',
  [PERMISSION_KEY.DELETE_OWN_MESSAGE]: 'delete_post',
  [PERMISSION_KEY.CHANNEL_MENTIONS]: 'use_channel_mentions',
  [PERMISSION_KEY.DELETE_OTHERS_MESSAGE]: 'delete_others_posts',
  [PERMISSION_KEY.PIN_MESSAGE]: 'pin_post',
};
