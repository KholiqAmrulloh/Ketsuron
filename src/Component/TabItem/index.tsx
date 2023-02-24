import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconAkun, IconHome, IconPesanan, IconPesananActive, IconInbox, IconInboxActive, IconAkunActive, IconHomeActive } from '../../assets'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    
    const Icon = () => {
        if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome/>
        if(label === "Details") return isFocused ? <IconPesananActive/> : <IconPesanan/>
        if(label === "Search") return isFocused ? <IconInboxActive/> : <IconInbox/>
        if(label === "Akun") return isFocused ? <IconAkunActive/> : <IconAkun/>

        return <IconHome/>
    }
    return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
    >
        <Icon />
        {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' , fontSize: 11, paddingTop: 3}}>
        {label}
      </Text> */}
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({

})