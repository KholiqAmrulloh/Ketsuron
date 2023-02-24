import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WARNA_BG_IMAGE, WARNA_PRIMARY, WARNA_PUTIH } from '../../utils/warna'
import { IconBell, Fav, Trend } from '../../assets'

const Home = () => {
  return (
    <ImageBackground source={require('../../assets/Image/bgluar.png')} style={{ flex: 1 }}>
      <View style={{ paddingTop: 40, flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 30 }}>
        <TouchableOpacity>
          <IconBell />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 50 }}>
        <View style={{ borderWidth: 8, borderRadius: 20, borderColor: WARNA_PRIMARY, height: 175, marginHorizontal: 30, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 50, color: WARNA_PRIMARY, fontWeight: 'bold', marginBottom: 15 }}>MAVEN APP</Text>
          <Text style={{ color: WARNA_PRIMARY, fontWeight: 'bold' }}>Kunjungi tempat wisata favoritmu</Text>
        </View>
        <Text style={{ marginHorizontal: 28, paddingTop: 20 }}>Jelajahi wisata bandung</Text>
        <View style={{ backgroundColor: WARNA_BG_IMAGE, height: 150, marginTop: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
            <TouchableOpacity style={{ backgroundColor: WARNA_PUTIH, height: 120, flex: 1, borderColor: WARNA_PRIMARY, borderWidth: 2, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text>Gambar</Text>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 10 }}></View>
            <TouchableOpacity style={{ backgroundColor: WARNA_PUTIH, height: 120, flex: 1, borderColor: WARNA_PRIMARY, borderWidth: 2, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text>Gambar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 40, paddingTop: 10 }}>
          <TouchableOpacity style={{ flex: 1 }} >
            <View style={{ backgroundColor: WARNA_PRIMARY, height: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Fav width={60} height={60} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text>Favourite</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginHorizontal: 40 }}></View>
          <TouchableOpacity style={{ flex: 1 }} >
            <View style={{ backgroundColor: WARNA_PRIMARY, height: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Trend width={60} height={60} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text>Trending</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({})